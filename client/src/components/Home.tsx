import { Button, Col, Form, Input, Layout, Row, Table, Select } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
import { getSearchResult } from 'apis/solr'
import { IFormValue, ISearchParams, ITableData } from '@types'
import { titleCategories } from 'constants/index'
import { buildQueryParams } from 'utils'

const columns = [
  {
    title: 'Tên bài báo',
    dataIndex: 'title',
    key: 'title'
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

  const onFinish = (values: IFormValue) => {
    const params: ISearchParams = {
      q: buildQueryParams(values)
    }
    getSearchResult(params).then(res => {
      setData(res.response.docs)
    })
  }

  return (
    <StyledLayout>
      <Row justify="center">
        <Col span="16">
          <Form name="search-form" form={form} onFinish={onFinish}>
            <Row gutter={16}>
              <Col span="6">
                <Form.Item name="title">
                  <Select size="large" placeholder="Tất cả" allowClear>
                    {titleCategories.map((e: string) => (
                      <Select.Option key={e} value={e}>
                        {e}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span="18">
                <Form.Item name="content">
                  <Input size="large" placeholder="Enter search here" />
                </Form.Item>
              </Col>
            </Row>
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
