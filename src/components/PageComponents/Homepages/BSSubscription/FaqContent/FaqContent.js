import React from 'react';
import { Accordion } from 'react-bootstrap';

// data 
import { useData } from '../../../../../context/DataProvider/DataProvider';

// components 
import NioIcon from '../../../../NioIcon/NioIcon';

export default function FaqContent() {

  const data = useData();
  const contents = data.faqs.contents;

  return (
    <div className="nk-faq">
      <Accordion className="accordion-s3 border border-lighter" defaultActiveKey={0}>
        {
          contents && contents.map((content, idx) => (
            <Accordion.Item className="py-4" eventKey={idx} key={idx}>
              <Accordion.Header as="div">
                <div className="h5 mb-0 text-capitalize">{content.title}</div>
                <NioIcon size="sm" name="downward-ios" className="inline-block bg-gray-300 p-3 rounded-1 on" />
                <NioIcon size="sm" name="upword-ios" className="inline-block bg-gray-300 p-3 rounded-1 off" />
              </Accordion.Header>
              <Accordion.Body>
                <p className="fs-16 text-base">
                  {content.description}
                </p>
              </Accordion.Body>
            </Accordion.Item>
          ))
        }
      </Accordion>
    </div>

  )
}
