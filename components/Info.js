import React from "react";


export default function CardImage() {
    return (
        <div>
            <div className="person--image">
                <img src="./images/card-img.png" alt="Image of owner" />
            </div>
            <div className="person--details">
                <h1 className="name">Katherine Yoda</h1>
                <h3 className="designation">Frontend Developer</h3>
                <a className="website">katherineyoda.com</a>
            </div>
            <div className="person--contact">
                <a href="#" className="custom--button button--1">
                    <span className="icon"><i className="fa-solid fa-envelope"></i></span>
                    <span className="btn--text">Email</span>
                </a>
                <a href="#" className="custom--button button--2">
                    <span className="icon"><i className="fa-brands fa-linkedin"></i></span>
                    <span className="btn--text">LinkedIn</span>
                </a>
            </div>
        </div>
    )
}