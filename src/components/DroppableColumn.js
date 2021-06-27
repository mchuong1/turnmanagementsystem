import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Paper, Divider, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '20px'
  },
  title: {
    color: 'white'
  },
  list: {
    listStyle: 'none',
    width: '300px',
    padding: '10px',
    height: 'fit-content',
    '& p': {
      maxWidth: 'none',
      fontWeight: 'bold',
      margin: 0
    }
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    border: 'solid 2px #d0d0d0',
    borderRadius: '.2em',
    padding: '.5em .8em .5em .5em',
    marginBottom: '1em',
  }
})

export default function DroppableColumn(props){

  const classes = useStyles();
  const { id, items, title } = props;

  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? '#e2f3f5' : 'white',
  });

  return (
    <Droppable droppableId={id}>
    {(provided, snapshot) =>
      <Paper 
        className={classes.list} 
        {...provided.droppableProps} 
        ref={provided.innerRef}
        style={getListStyle(snapshot.isDraggingOver)}
      >
        <Typography variant='h6'>{title}</Typography>
        <Divider style={{marginBottom: '1em'}}/>
        {items.map(({id, name}, index) => {
          return (
            <Draggable key={id} draggableId={id} index={index}>
              {(provided) => 
                <li
                  className={classes.listItem}
                  ref={provided.innerRef}
                  {...provided.draggableProps} 
                  {...provided.dragHandleProps}
                  >
                  <p>
                    {name}
                  </p>
                </li>
              }
            </Draggable>
          )
        })}
        {provided.placeholder}
      </Paper>
    }
  </Droppable>
  )
}