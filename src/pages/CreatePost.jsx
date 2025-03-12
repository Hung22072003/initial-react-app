import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaLinkedin, FaReddit, FaTwitter, FaUpload, FaTimes } from 'react-icons/fa';

export default function CreatePost() {
    const list_platform = [
        {
            name: 'Facebook',
            icon: <FaFacebook className="mr-[8px] text-[#2563EB]" />,
            link: '#',
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin className="mr-[8px] text-[#1D4ED8]" />,
            link: '#',
        },
        {
            name: 'Reddit',
            icon: <FaReddit className="mr-[8px] text-[#EA580C]" />,
            link: '#',
        },
        {
            name: 'Twitter',
            icon: <FaTwitter className="mr-[8px] text-blue-400" />,
            link: '#',
        },
    ];
    const fileInputRef = useRef(null);
    const { register, handleSubmit } = useForm();
    const [schedule, setSchedule] = useState(false);
    const [content, setContent] = useState('');
    const [scheduleTime, setScheduleTime] = useState('');
    const onSubmit = (data) => {
        console.log(data);
        console.log(content);
        console.log(schedule, scheduleTime);
        console.log(files);
    };

    const [images, setImages] = useState([]);
    const [files, setFiles] = useState([]);
    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        setFiles(files);
        const imageUrls = files.map((file) => URL.createObjectURL(file));
        setImages([...images, ...imageUrls]);
    };

    const removeImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
        setFiles(files.filter((_, i) => i !== index));
    };

    return (
        <div className="rounded-[8px] bg-white p-[16px]">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-[16px]">
                    <label htmlFor="content" className="mb-[8px] block text-[16px] text-[#374151]">
                        Content
                    </label>
                    <textarea
                        name="content"
                        id="content"
                        value={content}
                        className="h-[200px] w-full rounded-[8px] border-[1px] border-[#D1D5DB] p-[12px_24px] text-[#4B5563] outline-none"
                        onChange={(e) => {
                            setContent(e.target.value);
                        }}
                    ></textarea>
                </div>

                <div className="mb-[16px] flex items-center">
                    <input
                        id="schedule"
                        type="checkbox"
                        checked={schedule}
                        onChange={() => setSchedule(!schedule)}
                        className="mr-2"
                    />
                    <label htmlFor="schedule">Do you want to schedule this post?</label>
                </div>

                {schedule && (
                    <div className="mb-[16px]">
                        <label htmlFor="schedule_time" className="mb-[8px] block text-[16px] text-[#374151]">
                            Schedule Time
                        </label>
                        <input
                            type="datetime-local"
                            id="schedule_time"
                            value={scheduleTime}
                            className="w-[20%] rounded-[8px] border-[1px] border-[#D1D5DB] p-[12px_24px] text-[#4B5563] outline-none"
                            onChange={(e) => {
                                setScheduleTime(e.target.value);
                            }}
                        />
                    </div>
                )}

                <div>
                    <label htmlFor="schedule_time" className="mb-[8px] block text-[16px] text-[#374151]">
                        Select images
                    </label>
                    <div className="w-full">
                        <button
                            className="flex cursor-pointer items-center rounded bg-gray-200 p-2"
                            onClick={() => fileInputRef.current.click()}
                        >
                            <FaUpload className="mr-2" /> Upload Images
                        </button>
                        <input
                            type="file"
                            multiple
                            className="hidden"
                            ref={fileInputRef}
                            onChange={handleImageUpload}
                        />

                        {images.length > 0 && (
                            <div className="mt-4 grid grid-cols-16 gap-2">
                                {images.map((src, index) => (
                                    <div key={index} className="relative">
                                        <img src={src} alt="Uploaded" className="h-24 w-24 rounded object-cover" />
                                        <button
                                            onClick={() => removeImage(index)}
                                            className="absolute top-0 right-0 cursor-pointer rounded-full bg-red-500 p-1 text-white"
                                        >
                                            <FaTimes size={12} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="my-[16px]">
                    <label htmlFor="schedule_time" className="mb-[8px] block text-[16px] text-[#374151]">
                        Select social platform
                    </label>
                    <div className="">
                        {list_platform.map((platform, index) => (
                            <div key={index} className="mb-2 flex items-center">
                                <input type="checkbox" {...register(platform.name.toLowerCase())} className="mr-2" />
                                {platform.icon}
                                <span>{platform.name}</span>
                                <a href={platform.link} className="ml-[16px] text-[#2563EB]">
                                    Login
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="w-full cursor-pointer rounded bg-[#2563EB] p-2 text-white hover:opacity-[0.9]">
                    Post Now
                </button>
            </form>
        </div>
    );
}
