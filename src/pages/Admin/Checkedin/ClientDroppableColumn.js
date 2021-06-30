import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Paper, Divider, Typography } from '@material-ui/core';
import _ from 'lodash';
import moment from 'moment';

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
      margin: 0
    }
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '.2em',
    padding: '.5em .8em .5em .5em',
    marginBottom: '1em',
  }
})

export default function DroppableColumn(props){

  const classes = useStyles();
  const { id, title, items } = props;

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
        {_.map(items, ({ _id, name, created_at, services }, index) => {
          return (
            <Draggable key={_id} draggableId={_id} index={index}>
              {(provided) => 
                <Paper
                  key={_id}
                  className={classes.listItem}
                  ref={provided.innerRef}
                  {...provided.draggableProps} 
                  {...provided.dragHandleProps}
                  >
                  <p>{`${moment(created_at).format('hh:mm A')} | ${name} `}</p>
                  <span>{services.join(', ')}</span>
                </Paper>
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