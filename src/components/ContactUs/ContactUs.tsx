import * as React from 'react'

export default class ContactUs extends React.Component {

    public render() {
        return (<div className="contactus-container ">
            <div className="contactus-view">
                <div className="view-col">
                    <img alt="contact us img" src={process.env.PUBLIC_URL + "/images/contact3.gif"} className="contact_us_img" />
                </div>
                <div className="view-col">
                    <div className="contact-info">
                        <h4>department 1</h4>
                        <p>
                            Adress : iran ..................
                        </p>
                        <p>
                            Tel : 00000000000
                        </p>
                        <p>
                            WebSite : www.........com
                        </p>
                        <hr />
                        <h4>department 2</h4>
                        <p>
                            Adress : iran ..................
                        </p>
                        <p>
                            Tel : 1111111111111
                        </p>
                        <p>
                            WebSite : www.........com
                        </p>

                    </div>

                </div>

            </div>

        </div>)
    }
}