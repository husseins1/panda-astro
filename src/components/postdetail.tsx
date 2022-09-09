

const PostDetail = ({ post }) => {
    
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = <b key={index}>{text}</b>;
            }

            if (obj.italic) {
                modifiedText = <em key={index}>{text}</em>;
            }

            if (obj.underline) {
                modifiedText = <u key={index}>{text}</u>;
            }
        }

        switch (type) {
            case "heading-three":
                return (
                    <h3 key={index} className="text-xl font-semibold mb-4">
                        {modifiedText.map((item, i) => (
                            < >{item}</>
                        ))}
                    </h3>
                );
            case "paragraph":
                return (
                    <p key={index} className="mb-8 text-lg">
                        {modifiedText.map((item, i) => (
                            < >{item}</>
                        ))}
                    </p>
                );
            case "heading-four":
                return (
                    <h4 key={index} className="text-md font-semibold mb-4">
                        {modifiedText.map((item, i) => (
                            < >{item}</>
                        ))}
                    </h4>
                );
            case "image":
                return (
                    <img
                        key={index}
                        alt={obj.title}
                        height={obj.height}
                        width={obj.width}
                        src={obj.src}
                    />
                );
            default:
                return modifiedText;
        }
    };

    return (
        <>
            <div className="bg-default">
                <div className="relative overflow-hidden h-[30vh] mb-6">
                    <img
                        src={post.featuredImage.url}
                        alt=""
                        className="object-center h-full w-full object-cover"
                    />
                </div>
                <div className="px-8 ">
                    <div className="flex items-center mb-8 w-full">
                        <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
                            
                        </div>
                       
                    </div>
                    <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
                    {post.content.raw.children.map((typeObj, index) => {
                        const children = typeObj.children.map((item, itemindex) =>
                            getContentFragment(itemindex, item.text, item)
                        );

                        return getContentFragment(index, children, typeObj, typeObj.type);
                    })}
                </div>
            </div>
        </>
    );
};

export default PostDetail;
