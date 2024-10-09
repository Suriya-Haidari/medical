"use client";
import Nav from "./components/Nav";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <main className="main__content flex flex-col min-h-screen dark:bg-neutral-900 text-black dark:text-white">
            <div className="flex flex-1">
              {/* Navbar on the left side */}
              <div className="lg:w-64 md:w-64 sm:w-64 flex-shrink-0 section">
                <Nav />
              </div>
              {/* Main content area */}
              <div className="flex-1 flex flex-col">
                {children}
                {/* Footer Section */}
                <footer className="footer w-full py-6 bg-gray-200 dark:bg-neutral-800 text-black dark:text-white">
                  <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 mx-auto">
                    <Footer />
                  </div>
                </footer>
              </div>
            </div>
          </main>
        </Provider>
      </body>
    </html>
  );
}
