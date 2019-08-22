import * as React from 'react'

export default class Partnerships extends React.Component {

    public render() {
        return (
            <div className="partnership-container">
                <div className="items-container">
                    <div className="item-cell ">
                        <div className="item">
                            <img src={process.env.PUBLIC_URL + "/images/img1.jpg"} alt="image1" className="item-img" />
                            <p>this part is a sapmle of item view with image.
                                this item has two part. the first part in the top, is a image and second part is a description for prcture.
                </p>
                        </div>
                    </div>
                    <div className="item-cell">
                        <div className="item">
                            <img src={process.env.PUBLIC_URL + "/images/img2.jpg"} alt="image2" className="item-img" />

                            <p>this is a duplicated text. this part is a sapmle of item view with image.
                                    this item has two part. the first part in the top, is a image and second part is a description for prcture.
                </p>
                        </div>
                    </div>
                    <div className="item-cell">
                        <div className="item">
                            <img src={process.env.PUBLIC_URL + "/images/img3.jpg"} alt="image3" className="item-img" />

                            <p>this is a duplicated text. this part is a sapmle of item view with image.
                                    this item has two part. the first part in the top, is a image and second part is a description for prcture.
                </p>
                        </div>
                    </div>
                </div></div>
        )
    }
}