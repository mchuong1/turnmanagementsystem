import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { DragDropContext } from 'react-beautiful-dnd';
import { getClient } from '../../../service/clientService';
import { getEmployees } from '../../../service/authService';

import PageSubHeader from '../../../components/PageSubHeader';
import ClientDroppableColumn from './ClientDroppableColumn';
import DroppableColumn from '../../../components/DroppableColumn';
import _ from 'lodash';

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
    display: 'flex',
    justifyContent: 'space-evenly'
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
  },
  employees: {
    display: 'grid',

  }
})

export default function Checkedin() {

  const classes = useStyles();

  const [columns, setColumns] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [techs, setTech] = useState();

  // a little function to help us with reordering the result
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  /**
   * Moves an item from one list to another list.
   */
  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  const onDragEnd = result => {
    const { source, destination } = result;
      
    if(!destination) return;
  
    if(source.droppableId === destination.droppableId) {
      const items = reorder(
        columns[source.droppableId],
        source.index,
        destination.index
      );
      
      return setColumns({...columns, [source.droppableId] : items})
    }
    
    const moved = move(
      columns[source.droppableId],
      columns[destination.droppableId],
      source,
      destination
    )
    return setColumns({...columns, ...moved})
  }

  const fetchData = async () => {
    setLoading(true)
    const {data: clients} = await getClient()
    const {data: techs} = await getEmployees()
    let techColumnObject;
    _.map(techs, (tech) => {
      techColumnObject = {...techColumnObject, [_.get(tech, 'user_id')]: []}
    })
    setTech(techs);
    setColumns({
      clients: clients,
      ...techColumnObject
    })
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return(
    <div className={classes.root}>
      <PageSubHeader title="Checked in" classes={{root: classes.header, title: classes.title}}/>
      <div className={classes.body}>
        <DragDropContext onDragEnd={onDragEnd}>
          <ClientDroppableColumn id="clients" items={columns['clients']} title="Client Waitlist" />
          <div className={classes.employees}>
            {_.map(techs, (tech) => {
              return <DroppableColumn id={tech.user_id} items={columns[tech.user_id]} title={tech.name}/>
            })}
          </div>
        </DragDropContext>
      </div>
    </div>
  )
}