import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,link }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank'); // Open link in a new tab
    }
  };
  return (
    <Col size={12} sm={6} md={4} onClick={handleClick} style={{ cursor: 'pointer' }}>
      
      <div className="proj-imgbx">
        <img src={imgUrl} alt='a'/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          
          
        </div>
      </div>
      
    </Col>
  )
}
