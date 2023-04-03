import React from 'react';
import styles from './Home.module.css';
import solution from './soluton.jpg';
import bgImage from './background-image.jpg';
// function Home() {
//     return (
//       <div className={styles.Home}>
//         <div className={styles.content}>
//           <div className={styles.leftSection}>
//             <h1>标题</h1>
//             <p>介绍性文字描述</p>
//           </div>
//           <div className={styles.rightSection}>
//             <img src={solution} alt="描述性图片" className={styles.image} />
//             <div className={styles.introduction}>
//               <p>简短的介绍性语言</p>
//               <button className={styles.button} onClick={() => window.location.href = '/other-page'}>
//                 跳转到其他界面
//               </button>
//             </div>
//           </div>
//         </div>
//         <footer className={styles.footer}>
//           <p>联系信息：123-456-7890 | example@example.com</p>
//         </footer>
//       </div>
//     );
//   }
  
//   export default Home;

function Home() {
    return (
      <div className={styles.Home} >
        <div className={styles.content}>
          <div className={styles.leftSection}>
            <h1>Green Journey</h1>
            <p className={styles.paragraph}> 
            Our website is dedicated to providing you with practical advice on energy conservation and emission reduction, the latest developments in environmental technology and information related to green lifestyles.
            </p>
            
            <p>
            Join us and let us care about the health of the earth and leave a better and greener home for future generations. Because every small change will become a powerful force, and together push us towards a sustainable future.
            </p>
            <button className={styles.button} onClick={() => window.location.href = '/information'}>
                View
            </button>
          </div>
          <div className={styles.rightSection}>
            <img src={solution} alt="picture" className={styles.image} />
            <div className={styles.introduction}>
              {/* <p>Our Advice</p> */}
              
            </div>
          </div>
        </div>
        {/* <footer className={styles.footer}>
          <p>联系信息：123-456-7890 | example@example.com</p>
        </footer> */}
      </div>
    );
  }
  
  export default Home;

