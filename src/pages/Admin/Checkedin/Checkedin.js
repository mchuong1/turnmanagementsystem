import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import PageSubHeader from '../../../components/PageSubHeader';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },
  body: {
    height: '87%',
    padding: '20px',
    overflowY: 'auto',
  },
  buttonBar: {
    display: 'flex',
    marginBottom: '1em'
  },
  header: {
    backgroundColor: '#3d5af1',
    marginTop: '-1px'
  },
  title: {
    color: 'white'
  },
  list: {
    listStyle: 'none',
    paddingLeft: 0,
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

const cards = [
  {
    id: '1',
    name: 'Matthew'
  },
  {
    id: '2',
    name: 'Phuong'
  },
  {
    id: '3',
    name: 'Het'
  }
]

export default function Checkedin() {

  const classes = useStyles();

  const [items, setItems] = useState(cards)

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const tempItems = Array.from(items)
    const [reorderedItem] = tempItems.splice(result.source.index, 1)
    tempItems.splice(result.destination.index, 0, reorderedItem)

    setItems(tempItems)
  }

  return(
    <div className={classes.root}>
      <PageSubHeader title="Checked in" classes={{root: classes.header, title: classes.title}}/>
      <div className={classes.body}>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="listId">
            {(provided) =>
              <ul className={classes.list} {...provided.droppableProps} ref={provided.innerRef}>
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
              </ul>
            }
          </Droppable>
        </DragDropContext>

      </div>
    </div>
  )
}