import React, { useState } from "react";
import {Search as SearchIcon} from '@mui/icons-material';
import { Box ,styled , InputBase} from "@mui/material";

const Component = styled(Box)`
    backgroung-color:#fff;
    height:45px;
    border-bottom:1px solid #F2F2F2;
`
const Wrapper = styled(Box)`
    background-color:#f0f2f5;
    border-radius: 10px;
    display:flex;
    align-items:center;
    height:35px;
    margin:5px 20px 5px 20px;

`
const Icon = styled(Box)`
    height:100%;
    padding:10px 25px 0px 10px;
    color:#919191;
`
const InputField = styled(InputBase)`
    width:100%;
    height:15px;
    font-size:14px;
`

const Search = ({setText})=>{

    return <div>
        <Component>
            <Wrapper>
                <Icon>
                    <SearchIcon />
                </Icon>
                <InputField 
                    placeholder="Search or start new chat"
                    onChange={(e) => setText(e.target.value)}
                />
            </Wrapper>
        </Component>
    </div>
}

export default Search;