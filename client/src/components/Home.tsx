import { Button, Col, Form, Input, Layout, Row, Table, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getDefaultSearchResult, getVietnameseSearchResult } from 'apis/solr'
import { IFormValue, ISearchParams, ISolrResponse } from '@types'
import { titleCategories } from 'constants/index'
import { buildQueryParams } from 'utils'

const columns = [
  {
    title: 'Tên bài báo',
    dataIndex: 'title',
    key: 'title',
    render: (text: any, record: any) => {
      return (
        <a target="_blank" rel="noreferrer" href={record.url}>
          {text}
        </a>
      )
    }
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
  const [page, setPage] = useState<number>(1)
  const [queryParams, setQueryParams] = useState<string>('*:*')
  const [pageSize, setPageSize] = useState<number | undefined>(10)
  const [core, setCore] = useState<number>(1)
  const [data, setData] = useState<ISolrResponse['response']>()

  const onFinish = (values: IFormValue) => {
    setQueryParams(buildQueryParams(values))
  }

  const handlePageChange = (page: number, pageSize: number | undefined) => {
    setPage(page)
    setPageSize(pageSize)
  }

  useEffect(() => {
    const params: ISearchParams = {
      q: queryParams,
      fl: 'id,topic,title,content,url,score',
      start: (page - 1) * (pageSize ? pageSize : 10),
      rows: pageSize
    }
    if (core === 1) {
      getDefaultSearchResult(params).then(res => {
        setData(res.response)
      })
    } else {
      getVietnameseSearchResult(params).then(res => {
        setData(res.response)
      })
    }
  }, [queryParams, page, pageSize, core])

  return (
    <StyledLayout>
      <Row justify="center">
        <Col span="16">
          <Form name="search-form" form={form} onFinish={onFinish}>
            <Row gutter={16}>
              <Col span={6}>
                <Form.Item>
                  <Select
                    size="large"
                    placeholder="Chọn core"
                    defaultValue={1}
                    onChange={(value: number) => setCore(value)}
                  >
                    <Select.Option value={1}>Search mặc định</Select.Option>
                    <Select.Option value={2}>Search Tiếng Việt</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span="6">
                <Form.Item name="topic">
                  <Select size="large" placeholder="Tất cả" allowClear>
                    {titleCategories.map((e: string) => (
                      <Select.Option key={e} value={e}>
                        {e}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span="12">
                <Form.Item name="search">
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
            rowKey="id"
            bordered
            dataSource={data?.docs}
            columns={columns}
            pagination={{
              current: page,
              pageSize: pageSize,
              total: data?.numFound,
              position: ['bottomRight'],
              pageSizeOptions: ['10', '15', '20'],
              showSizeChanger: true,
              onChange: handlePageChange
            }}
          />
        </Col>
      </Row>
    </StyledLayout>
  )
}

export default Home
