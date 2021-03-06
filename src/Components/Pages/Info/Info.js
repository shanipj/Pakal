import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import './Info.css';
import ToolBar from '../../Navigation/ToolBar/Toolbar';
import ExternalLinks from '../../UI/ExternalLinks/ExternalLinks';

// import { FirebaseDatabaseMutation } from "@react-firebase/database";


const info = (props) => (
    <div>
    <ToolBar  
    onClick ={props.showSideBar}
    closeSideBar= {props.closeSideBar}
    sideBar={props.sideBar}
    />
        <Container>
            <div className="maininfo" dir="rtl">
                <h2>הידעת?</h2>
                <hr />
                <p>
                    <ul>
                        <li><span> לפי האגדה, הקפה התגלה לראשונה במאה ה-9, כאשר רועה צאן אתיופי בשם ח'אלדי הבחין כי העיזים שלו, שבדרך כלל מנומנמות, הפכו
                         נמרצות יותר לאחר שכרסמו גרגרים אדומים מעץ ירוק עד. ח'אלדי לקח את פירות היער למוסלמי קדוש שהפך את הפולים הגולמיים למשקה הטעים המוכר לנו היום. </span></li>
                        <li><span> למרות שהקפה התגלה בשנת 850 לספירה לערך, רק בשנת 1100 כשהתפשט למוקה שבתימן, הוא הפך למשקה פופולארי. מוקה הייתה מרכז סחר מרכזי
                         לקפה מהמאה ה-15 ועד המאה ה-17. על שמה נקרא זן קפה שטעמו דומה לקפה עם שוקולד.</span></li>
                        <li><span> ממוקה, פולי הקפה נשלחו להודו, לג'אווה שבאינדונזיה ובסופו של דבר, בשנת 1515 לאירופה. בשנת 1675 יותר מ-3000 בתי אב בבריטניה שתו קפה.</span></li>
                        <li><span> במקור, קפה נחשב בתימן ובערב הסעודית כתרופת פלא ונלקח רק על פי עצת רופא.</span></li>
                        <li><span> תושבי ערב הסעודית היו הראשונים לגדל עצי קפה בחצי האי ערב. הם בדרך כלל קלו ובשלו אותו.</span></li>
                        <li><span>נכון להיום, קפה הוא המצרך השני הנסחר ביותר בעולם, אחרי שמן גולמי.</span></li>
                        <li><span>יותר מ-500 מיליארד כוסות קפה נצרכות בכל שנה, מה שהופך אותו למשקה הפופולארי ביותר בעולם.</span></li>
                        <li><span>המקומות היחידים בצפון אמריקה בהם קפה גדל הם הוואי ופורטו ריקו.</span></li>
                        <li><span> מספרים שכאשר ח'יר ביי, מושל האימפריה העותומאנית במצרים, אסר על שתיית קפה בשנת 1511 משום שחשש שהוא עלול לעודד
                התנגדות לשלטונו, הסולטן סאלים הראשון הוציא אותו להורג בטענה שהקפה הוא למעשה "מבורך".</span></li>
                        <li><span>בית הקפה הראשון בעולם נפתח בשנת 1475 בקושטא (איסטנבול של ימינו).</span></li>
                    </ul>
                </p>
            </div>


        </Container>
        <ExternalLinks/>
    </div>
)

export default info;

