export const Comments =  [
    {
      id: 'c1a7f',
      parentId:'000',
      username: 'john_doe',
      avatar: 'https://i.pravatar.cc/150?img=61',
      message: 'Hey everyone! Excited to be part of this discussion.',
      children: [
        {
          id: 'c2b8e',
          parentId:'c1a7f',
          username: 'susan_99',
          avatar: 'https://i.pravatar.cc/150?img=62',
          message: 'Welcome, John! Glad to have you here.',
          children: [
            {
              id: 'c3c9d',
              parentId: 'c2b8e',
              username: 'tech_guy',
               avatar: 'https://i.pravatar.cc/150?img=63',
              message: 'Same here! Looking forward to your insights.',
              children: []
            }
          ]
        }
      ]
    },
    {
      id: 'c4d1g',
      parentId:'000',
      username: 'dev_sam',
      avatar: 'https://i.pravatar.cc/150?img=64',
      message: 'Can anyone help me with async/await in JavaScript?',
      children: [
        {
          id: 'c5e2h',
          parentId:'c4d1g',
          username: 'code_master',
          avatar: 'https://i.pravatar.cc/150?img=65',
          message: 'Sure! What exactly are you trying to do?',
          children: [
            {
              id: 'c6f3j',
              parentId:'c5e2h',
              username: 'dev_sam',
              avatar: 'https://i.pravatar.cc/150?img=64',
              message: 'Trying to fetch data and render it after the response.',
              children: []
            }
          ]
        }
      ]
    },
    {
      id: 'c7g4k',
      parentId:'000',
      username: 'linda_works',
      avatar: 'https://i.pravatar.cc/150?img=66',
      message: 'I just published a new blog post on frontend performance tips!',
      children: []
    }
  ];
  
  