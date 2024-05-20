export const categories = [
  {
    name: "Poets",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.gf1h33X57XjSUiDP8EaSAgHaEK&pid=Api&P=0&h=180",
  },
  {
    name: "Photographers",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.xysMg9OjlkpVESOrfppu4AHaEK&pid=Api&P=0&h=180",
  },
  {
    name: "Digital Artists",
    image:
      "https://wallpapercave.com/wp/wp7027819.jpg",
  },
  {
    name: "Fashion designers",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.Jeyrf2FAptsoAQ_9mkpvQAHaE7&pid=Api&P=0&h=180",
  },
  {
    name: "Painters",
    image:
    "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/assets/v3/editorial/d/8d/d8d6f0e6-2e32-5a00-862b-e4c05a357cb1/55df6dc21f67f.image.jpg?resize=1200%2C818",
  },
  {
    name: "Visual art",
    image:
      "https://i.pinimg.com/originals/95/bc/c5/95bcc5616a19f28fc3c6fa6893342955.jpg",
  },
  {
    name: "Wallpapers",
    image:
      "https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg",
  },
  {
    name: "gadgets",
    image:
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FkZ2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  // {
  //   name: "history",
  //   image:
  //     "https://images.unsplash.com/photo-1649857815841-9ccbe6eb257b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8ZGlqcGJ3OTlrUVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  // },
  // {
  //   name: "cars",
  //   image:
  //     "https://i.pinimg.com/750x/eb/47/44/eb4744eaa3b3ccd89749fa3470e2b0de.jpg",
  // },
  // {
  //   name: "animals",
  //   image:
  //     "https://images.unsplash.com/photo-1659292862392-ac6d0851664e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8SnBnNktpZGwtSGt8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  // },
  // {
  //   name: "fitness",
  //   image:
  //     "https://i.pinimg.com/236x/25/14/29/251429345940a47490cc3d47dfe0a8eb.jpg",
  // },
  // {
  //   name: "wallpaper",
  //   image:
  //     "https://i.pinimg.com/236x/03/48/b6/0348b65919fcbe1e4f559dc4feb0ee13.jpg",
  // },
  // {
  //   name: "websites",
  //   image:
  //     "https://i.pinimg.com/750x/66/b1/29/66b1296d36598122e6a4c5452b5a7149.jpg",
  // },
  // {
  //   name: "photo",
  //   image:
  //     "https://i.pinimg.com/236x/72/8c/b4/728cb43f48ca762a75da645c121e5c57.jpg",
  // },
  // {
  //   name: "food",
  //   image:
  //     "https://i.pinimg.com/236x/7d/ef/15/7def15ac734837346dac01fad598fc87.jpg",
  // },
  // {
  //   name: "nature",
  //   image:
  //     "https://i.pinimg.com/236x/b9/82/d4/b982d49a1edd984c4faef745fd1f8479.jpg",
  // },
  // {
  //   name: "art",
  //   image:
  //     "https://i.pinimg.com/736x/f4/e5/ba/f4e5ba22311039662dd253be33bf5f0e.jpg",
  // },
  // {
  //   name: "travel",
  //   image:
  //     "https://i.pinimg.com/236x/fa/95/98/fa95986f2c408098531ca7cc78aee3a4.jpg",
  // },
  // {
  //   name: "quotes",
  //   image:
  //     "https://i.pinimg.com/236x/46/7c/17/467c17277badb00b638f8ec4da89a358.jpg",
  // },
  // {
  //   name: "cats",
  //   image:
  //     "https://i.pinimg.com/236x/6c/3c/52/6c3c529e8dadc7cffc4fddedd4caabe1.jpg",
  // },
  // {
  //   name: "dogs",
  //   image:
  //     "https://i.pinimg.com/236x/1b/c8/30/1bc83077e363db1a394bf6a64b071e9f.jpg",
  // },
  // {
  //   name: "other",
  //   image:
  //     "https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg",
  // },
];

export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
        _id,
        destination,
        postedBy->{
          _id,
          userName,
          image
        },
        save[]{
          _key,
          postedBy->{
            _id,
            userName,
            image
          },
        },
      } `;

export const pinDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
      image{
        asset->{
          url
        }
      },
      _id,
      title, 
      about,
      category,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
     save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
      comments[]{
        comment,
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      }
    }`;
  return query;
};

export const pinDetailMorePinQuery = (pin) => {
  const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
          image{
            asset->{
              url
            }
          },
              _id,
              destination,
              postedBy->{
                _id,
                userName,
                image
              },
              save[]{
                _key,
                postedBy->{
                  _id,
                  userName,
                  image
                },
              },
            }`;
  return query;
};

export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export const userCreatedPinsQuery = (userId) => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
  return query;
};

export const userSavedPinsQuery = (userId) => {
  const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
  return query;
};
