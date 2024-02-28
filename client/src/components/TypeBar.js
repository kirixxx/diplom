import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import { ListGroup } from 'react-bootstrap';

const TypeBar = observer(() => {
    const {game} = useContext(Context)

    return (
        <ListGroup>
            {game.types.map(type=>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={type.id === game.selectedType.id} 
                    onClick={() => game.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
  );
});

export default TypeBar;
