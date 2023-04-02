// import './directory-item.styles.scss'
import { BackgroundImage,Body,DirectoryItemContainer } from "./directory-item.styles";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({category})=>{

    const {title,imageUrl,route}=category;
    const navigate = useNavigate();
    const onNavigationHandler = () => navigate(route);
// console.log(imageUrl);
    return (<DirectoryItemContainer onClick={onNavigationHandler}>
    <BackgroundImage imageUrl={imageUrl}/>
    <Body>
      <h2>{title}</h2>
      <p>Shop Now</p>
    </Body>
  </DirectoryItemContainer>)

}

export default DirectoryItem;