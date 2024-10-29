import { Component } from "react";
import './Footer.css'

class Footer extends Component {
    render() {
        return(
            <>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <p>
                                    Copyright @ 2050 <a href="/#">Cyborg Gaming</a> Company. All rights reserved.
                                    <br />Design: <a href="/#" target="_blank" title="free css template">TemplateMo</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;