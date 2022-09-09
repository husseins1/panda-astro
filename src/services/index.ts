import {request,gql} from "graphql-request"
const apiPoint = import.meta.env.GRAPH_API;

export const fetchData = async (lang:string)=>{
const variables = {
  lang
};
  const query = gql`
  query MyQuery($lang: Locale!) {
  abouts(locales:[$lang]){
    text
  }
  services(locales:[$lang]){
    title
    description
    icon{
      url
    }
  }
  projects{
    title
    url
    img{
      url
    }
  }
  posts{
    title
    excerpt
    slug
  }
  reviews{
    name
    title
    content
    image{
        url
    }
  }
}
  `;
  return await request(apiPoint,query,variables)
}
export const fetchPostData = async ()=>{

  const query = gql`
  query MyQuery {
  posts{
    title
    excerpt
    content{
        raw
    }
    featuredImage{
        url
    }
    slug
  }
}
  `;
  return await request(apiPoint,query,{})
}