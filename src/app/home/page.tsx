"use client";
import Info from "./Cards";
import Btn from "./Btn";
import { useEffect } from "react";
import { doctorsData, hospitalData } from "./data";
import "./style.css";
import Doctors from "./Doctors";
import "./index.css";

export default function Example() {
  useEffect(() => {
    const initCarousel = () => {
      let nextDom = document.getElementById("next");
      let prevDom = document.getElementById("prev");

      let carouselDom = document.querySelector(".carousel");
      let SliderDom = carouselDom.querySelector(".carousel .list");
      let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
      let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
      let timeDom = document.querySelector(".carousel .time");

      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
      let timeRunning = 3000;
      let timeAutoNext = 7000;

      nextDom.onclick = function () {
        showSlider("next");
      };

      prevDom.onclick = function () {
        showSlider("prev");
      };

      let runTimeOut;
      let runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);

      function showSlider(type) {
        let SliderItemsDom = SliderDom.querySelectorAll(
          ".carousel .list .item"
        );
        let thumbnailItemsDom = document.querySelectorAll(
          ".carousel .thumbnail .item"
        );

        if (type === "next") {
          if (SliderItemsDom[0] && thumbnailItemsDom[0]) {
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom.classList.add("next");
          }
        } else {
          if (
            SliderItemsDom[SliderItemsDom.length - 1] &&
            thumbnailItemsDom[thumbnailItemsDom.length - 1]
          ) {
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(
              thumbnailItemsDom[thumbnailItemsDom.length - 1]
            );
            carouselDom.classList.add("prev");
          }
        }

        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
          carouselDom.classList.remove("next");
          carouselDom.classList.remove("prev");
        }, timeRunning);

        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
          nextDom.click();
        }, timeAutoNext);
      }
    };

    initCarousel();
  }, []);

  return (
    <div className="bg-white dark:bg-neutral-900">
      <div className="flex flex-col z-50 bg-white">
        <br />
        <br />
        <br />
      </div>
      <div className="relative w-11/12 bg-white dark:bg-neutral-900 w-full min-h-screen flex flex-col ">
        <div className="carousel">
          <div className="list">
            <div className="item">
              <img src="/img1.jpg" />
              <div className="content">
                <div className="author">City Hospital</div>
                <div className="title">Advanced Heart Surgery</div>
                <div className="topic">Cardiology</div>
                <div className="des">
                  Our team of expert cardiac surgeons provides the latest heart
                  surgery techniques, ensuring top-notch care and successful
                  outcomes.
                </div>
                <div className="buttons">
                  <Btn text="Contact Us" />
                </div>
              </div>
            </div>
            <div className="item">
              <img src="/img2.jpg" />
              <div className="content">
                <div className="author">City Hospital</div>
                <div className="title">Comprehensive Cancer Care</div>
                <div className="topic">Oncology</div>
                <div className="des">
                  Our state-of-the-art cancer center offers personalized
                  treatment plans, cutting-edge therapies, and compassionate
                  care for all types of cancer, from diagnosis to recovery.
                </div>
                <div className="buttons">
                  <Btn text="Contact Us" />
                </div>
              </div>
            </div>
            <div className="item">
              <img src="/img3.jpg" />
              <div className="content">
                <div className="author">City Hospital</div>
                <div className="title">Maternity Services</div>
                <div className="topic">Obstetrics</div>
                <div className="des">
                  Our maternity services provide expectant mothers with
                  personalized care in a warm and comfortable environment. From
                  prenatal care to delivery and postpartum support, we ensure a
                  smooth and joyful experience.
                </div>
                <div className="buttons">
                  <Btn text="Contact Us" />
                </div>
              </div>
            </div>
            <div className="item">
              <img src="/img4.jpg" />
              <div className="content">
                <div className="author">City Hospital</div>
                <div className="title">Emergency Care</div>
                <div className="topic">And Services</div>
                <div className="des">
                  Our emergency department is open 24/7, providing immediate
                  care for all medical emergencies, from accidents to acute
                  illnesses.
                </div>
                <div className="buttons">
                  <Btn text="Contact Us" />
                </div>
              </div>
            </div>
          </div>
          <div className="thumbnail">
            <div className="item">
              <img src="/img4.jpg" />
              <div className="content">
                <div className="title">Emergency Care</div>
                <div className="description">
                  24/7 Immediate Medical Assistance
                </div>
              </div>
            </div>
            <div className="item">
              <img src="/img1.jpg" />
              <div className="content">
                <div className="title">Heart Surgery</div>
                <div className="description">World-Class Cardiac Services</div>
              </div>
            </div>
            <div className="item">
              <img src="/img2.jpg" />
              <div className="content">
                <div className="title">Cancer Care</div>
                <div className="description">
                  Personalized Cancer Treatments
                </div>
              </div>
            </div>
            <div className="item">
              <img src="/img3.jpg" />
              <div className="content">
                <div className="title">Maternity Services</div>
                <div className="description">Compassionate Maternity Care</div>
              </div>
            </div>
          </div>

          <div className="arrows ">
            <button id="prev">-</button>
            <button id="next">=</button>
          </div>
          <div className="time"></div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Info hospitalData={hospitalData} />
        <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br />
        <Doctors doctorsData={doctorsData} />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
