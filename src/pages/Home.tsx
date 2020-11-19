import { Button, Col, Form, Input, Layout, Row, Table } from 'antd'
import { demoData } from 'constants/demo'
import React from 'react'
import styled from 'styled-components'

const columns = [
  {
    title: 'Tên bài báo',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Chủ đề',
    dataIndex: 'topic',
    key: 'topic',
    width: '10%'
  },
  {
    title: 'Nội dung',
    dataIndex: 'content',
    key: 'content'
  }
]

const StyledLayout: React.FC = styled(Layout)`
  padding-top: 40px !important;
  height: 100vh;
`

const Home: React.FC = () => {
  return (
    <StyledLayout>
      <Row justify="center">
        <Col span="16">
          <Form name="search">
            <Form.Item>
              <Input size="large" placeholder="Enter search here" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 11, span: 4 }}>
              <Button size="large" type="primary">
                Search
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row justify="center">
        <Col span="16">
          <Table
            bordered
            dataSource={demoData}
            columns={columns}
            pagination={{
              position: ['bottomRight'],
              pageSizeOptions: ['5', '10', '15'],
              showSizeChanger: true
            }}
          />
        </Col>
      </Row>
    </StyledLayout>
  )
}

export default Home
