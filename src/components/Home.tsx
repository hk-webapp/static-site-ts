import * as React from 'react'
import Partnerships from './partnerships/Partnerships';

export default class Home extends React.Component {

    public render() {
        return (<div className="home-page-container">
            <div className="home-page-row content1">
                <h1 className="animate_hide_to_show"> Content 1</h1>
                <p>This part is a design that used a svg for background. additional, a animation applied in title of this part.</p>
            </div>
            <div className="home-page-row items-temp1">
                <Partnerships />
            </div>
            <div className="home-page-row content2">
                <h1  className="animate_go_down ">Content 2</h1>
                <p>This part is a sample for content 2 design. In this design used animation for title.</p>
            </div>
            <div className="home-page-row content3 ">
                <h1>Content 3</h1>
                <p>This is a sample of content 3 design. this part used svg for backgound.
                    This part use light color for design.
                     this desc duplicated for showing this part's view. I hope you satisfy this design.</p>
            </div>

        </div >)
    }
}