const PriceCart = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <Card>
            <div className="card-header">
              <h3 className="card-title">Basic</h3>
            </div>
            <div className="card-body">
              <div className="price">
                <sup className="currency">$</sup>
                19
              </div>
              <ul className="list-unstyled">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
              </ul>
            </div>
            <div className="card-footer">
              <Button variant="primary">Choose Plan</Button>
            </div>
          </Card>
        </div>
        <div className="col-lg-4">
          {/* Repeat the structure for the other two pricing options */}
        </div>
        <div className="col-lg-4">
          {/* Repeat the structure for the other two pricing options */}
        </div>
      </div>
    </div>
  );
}

export default PriceCart;
