import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"


function Soup () {
    return (
        <div>
            <h1>Борщ</h1>
            <p>Борщ — горячий заправочный суп на основе свёклы, которая придаёт ему характерный красный цвет.</p>
        </div>
    );
};


export default Soup = () => <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />;