export interface Blog {
  id: string;
  authorId : string;
  authorName: string;
  blogName : string;
  description : string;
  posts? : Post[];
}

export interface Post {
  authorid : string;
  blogid : string;
  title : string;
  content : string;
  comments? : string[];
}

export interface Comment {
  userid : string;
  postid : string;
  content : string;
  edited : boolean;
  lastmodificated : Date;
}
