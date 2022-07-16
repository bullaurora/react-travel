import React from 'react'
import styles from './BusinessPartners.module.css'
import { Divider, Typography, Row, Col, Image } from 'antd'
import image1 from '../../assets/images/microsoft-80658_640.png'
import image2 from '../../assets/images/icon-720944_640.png'
import image3 from '../../assets/images/follow-826033_640.png'
import image4 from '../../assets/images/facebook-807588_640.png'
const companies = [
  { src: image1, title: 'Microsoft' },
  { src: image2, title: 'Youtube' },
  { src: image3, title: 'Ins' },
  { src: image4, title: 'Facebook' },
]
export const BusinessPartners: React.FC = () => {
  return (
    <div className={styles.content}>
      <Divider orientation={'left'}>
        <Typography.Title level={3}>合作企业</Typography.Title>
      </Divider>
      <Row>
        {companies.map((company, index) => (
          <Col span={6} key={'bussiness-partner-' + index}>
            <img src={company.src} alt="bussiness-partner" style={{
                display: 'block',
                width: "80%",
                marginLeft:"auto",
                marginRight:"auto",
               
            }}></img>
          </Col>
        ))}
      </Row>
    </div>
  )
}
