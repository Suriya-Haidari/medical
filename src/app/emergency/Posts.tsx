"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { fetchItems, deleteItem } from "../store/slices/itemsSlice";
import { setEditItem } from "../store/slices/editSlice";
import { setFilter } from "../store/slices/filterSlice";
import { setExpandedItemId } from "../store/slices/expandedItemState";
import ItemCard from "./ItemCard";
import EditForm from "./EditForm";
import FilterButtons from "./FilterButtons";
import { RootState } from "../store/store";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Posts() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.items.items);
  const filter = useSelector((state: RootState) => state.filter.filter);
  const editItem = useSelector((state: RootState) => state.edit.item);
  const expandedItemId = useSelector(
    (state: RootState) => state.expandedItem.expandedItemId
  );

  const router = useRouter();
  const [role, setRole] = useState<string | null>(null); // State for storing the user role

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const token = Cookies.get("token");
        if (!token) {
          console.error("No token found in cookies.");
          return;
        }

        const response = await axios.get(
          "http://localhost:3001/api/user/role",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setRole(response.data.role);
      } catch (error) {
        console.error("Error fetching user role:", error);
        setRole("user");
      }
    };

    fetchUserRole();
  }, []);
  // Fetch posts when component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = Cookies.get("token");
        if (!token) {
          console.error("No token found.");
          return;
        }

        const postsResponse = await fetch(
          `http://localhost:3001/api/items/${filter}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );

        if (postsResponse.status === 403) {
          alert("You don't have permission to access this content.");
        } else if (postsResponse.status === 401) {
          alert("Your session has expired. Please log in again.");
        }

        dispatch(fetchItems(filter));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [dispatch, filter]);

  // // Fetch user role for role-based access control
  // useEffect(() => {
  //   const fetchUserRole = async () => {
  //     try {
  //       const token = Cookies.get("token");
  //       if (!token) {
  //         console.error("No token found.");
  //         return;
  //       }

  //       const response = await axios.get(
  //         "http://localhost:3001/api/user/role",
  //         {
  //           headers: { Authorization: `Bearer ${token}` },
  //         }
  //       );

  //       setUserRole(response.data.role); // Set the user's role
  //     } catch (error) {
  //       console.error("Error fetching user role:", error);
  //     }
  //   };

  //   fetchUserRole();
  // }, []);

  // Handle navigation based on role
  const handleAdminPanelNavigation = () => {
    router.push("/adminPage");
  };

  const handleProfileNavigation = () => {
    router.push("/adminPage/profile");
  };

  const handleCreateNewPost = () => {
    router.push("/new-post");
  };
  const handleEdit = (item) => {
    dispatch(setEditItem(item));
  };

  const handleDelete = async (id, option) => {
    try {
      await axios.delete(`http://localhost:3001/api/items/${option}/${id}`);
      dispatch(deleteItem(id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const filteredItems = items.filter((item) => {
    if (filter === "all") return true;
    return item.option === filter;
  });

  const toggleExpand = (id) => {
    dispatch(setExpandedItemId(expandedItemId === id ? null : id));
  };
  return (
    <div className="bg-white dark:bg-neutral-900">
      <div className="ml-10 sm:ml-0 mt-10 sm:mt-0">
        {/* Conditionally render buttons based on user role */}
        {role === "manager" ? (
          <>
            <button
              onClick={handleAdminPanelNavigation}
              className="w-10/12 sm:w-2/12 bg-teal-500 text-white py-2 rounded my-4 dark:bg-gray-200 dark:text-black"
            >
              Open Admin Panel
            </button>
            &nbsp;
            <button
              onClick={handleCreateNewPost}
              className="w-10/12 sm:w-2/12 bg-teal-500 text-white py-2 rounded my-4 dark:bg-gray-200 dark:text-black"
            >
              Create New Post
            </button>
          </>
        ) : (
          <button
            onClick={handleProfileNavigation}
            className="w-10/12 sm:w-2/12 bg-green-500 text-white py-2 rounded my-4"
          >
            Open Profile Page
          </button>
        )}
      </div>

      <div className="w-12/12 mx-auto py-8 text-black bg-white dark:bg-neutral-900 dark:text-white">
        <FilterButtons
          filter={filter}
          setFilter={(filter) => dispatch(setFilter(filter))}
        />

        {editItem ? (
          <EditForm />
        ) : (
          <div>
            {filteredItems.length > 0 ? (
              <div className="flex flex-wrap justify-center p-4 gap-4">
                {filteredItems.map((item) => (
                  <ItemCard
                    key={item.id}
                    item={item}
                    handleEdit={handleEdit}
                    handleDelete={() => handleDelete(item.id, item.option)}
                    isExpanded={expandedItemId === item.id}
                    toggleExpand={() => toggleExpand(item.id)}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-lg">No posts available yet!</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
