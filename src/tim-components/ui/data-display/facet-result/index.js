import React, { useState } from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';



const FacetResult = ({ facetInfo, selected, handleSelectionUpdate }) => {

    const handleChange = (name) => (event) => {

    }

    const lableText = (facetInfo) => `${facetInfo.name}(${facetInfo.value})`


    return (
        <>
            <ListItem>

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={selected}
                            onChange={handleChange('checkedA')}
                            value="checkedA" />
                    }
                    label={lableText(facetInfo)}
                />

            </ListItem>
            <Divider />
        </>
    )
}


export default FacetResult;