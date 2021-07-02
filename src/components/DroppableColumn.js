import React from 'react';
import { makeStyles, Paper, Divider, Typography } from '@material-ui/core';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import _ from 'lodash';
import PropTypes from 'prop-types'

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
    alignItems: 'center',
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
        <Typography variant='h8' style={{fontWeight: 'bold'}}>{title}</Typography>
        <Divider style={{marginBottom: '1em'}}/>
        {_.map(items, ({_id, user_id:userId, name}, index) => 
            <Draggable key={_id ?? userId} draggableId={_id ?? userId} index={index}>
              {/* eslint-disable-next-line no-shadow */}
              {(provided) => 
                <Paper
                  className={classes.listItem}
                  ref={provided.innerRef}
                  {...provided.draggableProps} 
                  {...provided.dragHandleProps}
                  >
                  <p>
                    {name}
                  </p>
                </Paper>
              }
            </Draggable>
          )
        }
        {provided.placeholder}
      </Paper>
    }
  </Droppable>
  )
}

DroppableColumn.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.shape({}).isRequired,
  user_id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(PropTypes.string).isRequired,
}