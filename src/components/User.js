import { useEffect, useState } from 'react';

const User = ({ name, location }) => {

    useEffect(() => {
        const i = setInterval(() => {
        }, 1000);

        return () => {
            clearInterval(i);
        }
    }, []);

    return (
        <div className="mt-10 flex justify-center">
            <div className="min-h-[500px] w-[400px] rounded-xl border border-gray-300 bg-white p-6 text-left shadow-md">
                <h2 className="mb-4 text-2xl font-bold">
                    Name: {name}
                </h2>

                <h3 className="mb-3 text-xl font-semibold text-gray-700">
                    Location: {location}
                </h3>

                <h4 className="mb-3 text-lg font-medium text-gray-600">
                    Contact: @kishore0519
                </h4>

                <p className="text-gray-500">
                    Component type: Functional
                </p>
            </div>
        </div>
    );
}

export default User;
