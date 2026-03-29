const DashboardSummary = () => {
    return (
        <section className="grid grid-cols-2 gap-10">
            <div className="banner-1 flex flex-col justify-center items-center text-white rounded-md space-y-4">
                <h3 className="text-2xl font-semibold">In-Progress</h3>
                <h2 className="text-4xl font-semibold">0</h2>
            </div>
            <div className="banner-2 flex flex-col justify-center items-center text-white rounded-md">
                    <h3 className="text-2xl font-semibold">Resolved</h3>
                <h2 className="text-4xl font-semibold">0</h2>
            </div>
        </section>
    );
};

export default DashboardSummary;