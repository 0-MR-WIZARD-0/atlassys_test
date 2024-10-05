import styles from "./header.module.scss"
import Logo from "../../resourses/logo.svg"
import Photo from "../../resourses/photo.png"
import Group from "../../resourses/Group.svg"
import Setting from "../../resourses/Setting.svg"
import Notification from "../../resourses/notification.svg"
import { useEffect, useState } from "react";

const Header = () => {

    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 1024);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 1024);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <div>
        {isMobile ? (
            <header>
                <div className={styles.wrapper_content_header_mobile}>
                    <span><img src={Group} alt=""/></span>
                    <h2>Setting</h2>
                    <img src={Photo} alt=""/>
                </div>
                    <input type="text" placeholder="Search for something" />
            </header>
        ):(
            <header>
                <div className={styles.logo}>
                    <img src={Logo} alt=""/>
                    <h1>BankDash.</h1>
                </div>
                <div className={styles.wrapper_content_header}>
                    <h2>Setting</h2>
                    <div>
                        <input type="text" placeholder="Search for something" />
                        <span><img src={Setting} alt=""/></span>
                        <span><img src={Notification} alt=""/></span>
                        <img src={Photo} alt=""/>
                    </div>
                </div>
            </header>   
        )}
    </div>
  )
}

export default Header