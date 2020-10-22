import styles from "./SocialIcons.module.css";

const SocialIcons: React.FC = () => {
  return (
    <div>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <a href='https://www.facebook.com/Tombul-Goril-101836561679343/'>
            <img
              src='/facebook.svg'
              alt='Facebook icon'
              className={styles.icon}
            />
          </a>
        </li>
        <li className={styles.list_item}>
          <a href='https://instagram.com/tombulgoril'>
            <img
              src='/instagram.svg'
              alt='Instagram Icon'
              className={styles.icon}
            />
          </a>
        </li>
        <li className={styles.list_item}>
          <a href='https://twitter.com/TombulGoril'>
            <img
              src='/twitter.svg'
              alt='Twitter Icon'
              className={styles.icon}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default SocialIcons;
