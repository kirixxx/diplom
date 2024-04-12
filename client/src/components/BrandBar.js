import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import { Card } from 'react-bootstrap';

const BrandBar = observer(() => {
    const {game} = useContext(Context)

  return (
    <div class="row" className='d-flex'>
        {game.brands.map(brand =>
            <Card
                style={{cursor: 'pointer'}}
                className='p-3'
                onClick={() => game.setSelectedBrand(brand)}
                border={brand.id === game.selectedBrand.id ? 'danger' : 'light'}
                key={brand.id}
            >
                {brand.name}
            </Card>
        )}
    </div>
  );
});

export default BrandBar;
