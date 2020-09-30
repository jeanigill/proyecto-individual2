import React from 'react'
import {Row, Card, Image, Col} from 'antd';


function Post (props) {
        return (
            <Col span={8}> <Card title= {props.post.title} bordered={false}>
            <Image height ="300" weight= "400" src={props.post.image_url}/>
            </Card>
            </Col>
        )
    }
 
export default Post;
