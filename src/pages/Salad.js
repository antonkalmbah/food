import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

function Salad () {
    return (
        <div>
            <h1>Цезарь</h1>
            <p>«Цезарь» — овощной салат. Популярное блюдо американской кухни.</p>
        </div>
    );
};

export default Salad = () => <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />;