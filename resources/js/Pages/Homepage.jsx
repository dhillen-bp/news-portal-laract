import { Link, Head } from "@inertiajs/react";

export default function Homepage(props) {
    return (
        <div className="flex justify-center items-center min-h-screen bg-slate-50 ">
            <Head title={props.title} />
            <div>
                {props.news ? (
                    props.news.map((data, i) => {
                        return (
                            <div
                                key={i}
                                className="p-4 m-2 bg-white text-black shadow-md rounded-md"
                            >
                                <p className="text-2xl">{data.title}</p>
                                <p>{data.description}</p>
                                <p className="inline-block text-sm p-1 bg-slate-600 rounded-sm text-slate-100">
                                    {data.category}
                                </p>
                                <p className="text-sm">{data.author}</p>
                            </div>
                        );
                    })
                ) : (
                    <p>Belum ada Berita</p>
                )}
            </div>
        </div>
    );
}
