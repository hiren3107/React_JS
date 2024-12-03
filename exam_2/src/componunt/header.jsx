function Header() {
    return (
        <div className="main">
            <header>
                <div className="logo">
                    <div>
                        <img src="https://cdn.masaischool.com/masai-website/Masai_Logo_dark_web_b21aab8c62.webp" alt="" className="img1"/>
                    </div>
                    <div>
                        <select name="" id="" className="op">
                            <option value="">COURSES</option>
                            <option value="">Front End</option>
                            <option value="">Full Stacs</option>
                            <option value="">Flutter</option>
                        </select>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li>SCHOLARSHIP &nbsp;
                            <i class="fa-solid fa-chevron-down"></i>
                        </li>
                        <li>SUCCESS STORIES</li>
                        <li>EVENTS</li>
                        <li>HIRE FROM US</li>
                        <li>FEES</li>
                        <div>
                            <button className="btn1">REGISTER</button>
                        </div>
                    </ul>
                </nav>
            </header>
        </div>
    )

}

export default Header