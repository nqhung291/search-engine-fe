import { Button, Col, Form, Input, Layout, Row, Table } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
import { getDemoSearchResult } from 'apis/solr'
import { ISearchParams, ITableData } from '@types'

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
  min-height: 100vh;
`

const Home: React.FC = () => {
  const [form] = Form.useForm()
  const [data, setData] = useState<ITableData[]>([])

  const onFinish = (value: ISearchParams) => {
    // getSearchResult(value).then(res => {
    //   setData(res)
    // })
    getDemoSearchResult(value).then(res => {
      setData(res)
    })
  }

  return (
    <StyledLayout>
      <Row justify="center">
        <Col span="16">
          <Form name="search-form" form={form} onFinish={onFinish}>
            <Form.Item name="search">
              <Input size="large" placeholder="Enter search here" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 11, span: 4 }}>
              <Button size="large" type="primary" htmlType="submit">
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
            dataSource={data}
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
