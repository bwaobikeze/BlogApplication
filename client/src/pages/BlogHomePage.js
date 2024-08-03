import {
  Avatar,
  Button,
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";
// import { useRouter } from "next/router";
import postList from "../models/PostListModel";

import React from "react";
import { useEffect, useState } from "react";

function BlogHomePage() {
  // const [posts, setPosts] = useState([]);

  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <Card>
          <CardHeader>
            <Avatar src="https://nextui.org/assets/avatar-1.jpg" alt="Avatar" />
            <div>
              <h5>John Doe</h5>
              <p>Jan 1, 2023</p>
            </div>
          </CardHeader>
          <CardBody>
            <Image src="https://nextui.org/assets/blog-1.jpg" alt="Blog" />
            <h3>Featured Post</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pulvinar, erat at fermentum malesuada, erat nunc fermentum sapien,
              ac vestibulum velit turpis et arcu. Nullam eget fermentum mauris.
              Nullam vestibulum, lacus a ultricies fermentum, neque leo
              fermentum nunc, ac vestibulum velit turpis et arcu.
            </p>
          </CardBody>
          <CardFooter>Social Media buttons</CardFooter>
        </Card>
      </div>
      <div className="flex flex-col">
        {postList.map((post) => (
          <Card>
            <CardHeader>
              <Avatar
                src="https://nextui.org/assets/avatar-1.jpg"
                alt="Avatar"
              />
              <div>
                <h5>John Doe</h5>
                <p>{post.PostDate}</p>
              </div>
            </CardHeader>
            <CardBody>
              <Image src={post.PostImage} alt="Blog" />
              <h3>{post.title}</h3>
              <p>{post.exerp}</p>
            </CardBody>
            <CardFooter>
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default BlogHomePage;
