import styles from "./aside.module.scss"
import Dashboard from "../../resourses/Dashboard.svg"
import Transactions from "../../resourses/Transactions.svg"
import Accounts from "../../resourses/Accounts.svg"
import Investments from "../../resourses/Investments.svg"
import Credit from "../../resourses/Credit.svg"
import Loans from "../../resourses/Loans.svg"
import Services from "../../resourses/Services.svg"
import Privileges from "../../resourses/Privileges.svg"
import Setting from "../../resourses/Setting.svg"
import { useEffect, useState } from "react"

const Aside = () => {

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
        { isMobile ? 
        (<></>) 
        : (
            <aside className="sidebar">
                <nav>
                <ul>
                    <li><img src={Dashboard} alt=""/>Dashboard</li>
                    <li><img src={Transactions} alt=""/>Transactions</li>
                    <li><img src={Accounts} alt=""/>Accounts</li>
                    <li><img src={Investments} alt=""/>Investments</li>
                    <li><img src={Credit} alt=""/>Credit Cards</li>
                    <li><img src={Loans} alt=""/>Loans</li>
                    <li><img src={Services} alt=""/>Services</li>
                    <li><img src={Privileges} alt=""/>My Privileges</li>
                    <li className={styles.active}><img src={Setting} alt=""/>Setting</li>
                </ul>
                </nav>
            </aside>
        )}
    </div>
  )
}

export default Aside