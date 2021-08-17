import React from 'react';
import { connect } from 'react-redux';
import {  setProjects } from '../../redux/piqueTree/PiqueTree.actions';
import { readAllFiles } from '../../utils/fileUpload.utils';
import { LoaderWrapper, Label, Input} from './MultipleFileUpload.styles'

const MultipleFilesUpload = ({setProjects}) => {

    const handleUpload = async (e) => {
        let allFiles = [];
        [...e.target.files].filter(file => file.size !== 0).map(file=> allFiles.push(file))
        console.log(allFiles)
        const results = await readAllFiles(allFiles);
        console.log(results)
        setProjects(results)
    }

    return (
        <div>
            <LoaderWrapper>
                <Label>
                    <i>Upload Multiple Files</i>
                    <Input 
                        type="file" 
                        accept=".json" 
                        multiple={true} 
                        onChange={handleUpload}
                    />
                </Label>
            </LoaderWrapper>
        </div>

     )
}


const mapDispatchToProps = dispatch => ({
    setProjects: data => dispatch(setProjects(data)),
})


export default connect(null, mapDispatchToProps)(MultipleFilesUpload)