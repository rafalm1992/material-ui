import React from 'react';
import TopLayoutBlog from 'docs/src/modules/components/TopLayoutBlog';
import markdown from './material-ui-v1-is-out.md';

export default function Page() {
  return <TopLayoutBlog markdown={markdown} />;
}
