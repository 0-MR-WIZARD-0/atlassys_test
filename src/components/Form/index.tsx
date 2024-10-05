import styles from "./form.module.scss"
import Photo from "../../resourses/photo.png"

const Form = () => {
  return (
    <form className="form">
            <div className={styles.tabs}>
              <button className={styles.active}>Edit Profile</button>
              <button>Preferences</button>
              <button>Security</button>
            </div>
            <div className={styles.wrapper}>
                <img src={Photo} alt=""/>
                <div className={styles.form_section}>
                    <div className={styles.input_group}>
                        <label>Your Name</label>
                        <input type="text" placeholder="Charlene Reed" />
                    </div>
                    <div className={styles.input_group}>
                        <label>User Name</label>
                        <input type="text" placeholder="Charlene Reed" />
                    </div>
                    <div className={styles.input_group}>
                        <label>Email</label>
                        <input type="email" placeholder="charlenereed@gmail.com" />
                    </div>
                    <div className={styles.input_group}>
                        <label>Password</label>
                        <input type="password" placeholder="**********" />
                    </div>
                    <div className={styles.input_group}>
                        <label>Date of Birth</label>
                        <input type="date" />
                    </div>
                    <div className={styles.input_group}>
                        <label>Present Address</label>
                        <input type="text" placeholder="San Jose, California, USA" />
                    </div>
                    <div className={styles.input_group}>
                        <label>Permanent Address</label>
                        <input type="text" placeholder="San Jose, California, USA" />
                    </div>
                    <div className={styles.input_group}>
                        <label>City</label>
                        <input type="text" placeholder="San Jose" />
                    </div>
                    <div className={styles.input_group}>
                        <label>Postal Code</label>
                        <input type="text" placeholder="45962" />
                    </div>
                    <div className={styles.input_group}>
                        <label>Country</label>
                        <input type="text" placeholder="USA" />
                    </div>
                    <>&nbsp;</>
                    <button className="save-button">Save</button>
                </div>
            </div>
            

    </form>
  )
}

export default Form