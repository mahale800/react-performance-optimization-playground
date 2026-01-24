
import RenderCounter from './RenderCounter';
import HeavyLazyComponent from './HeavyLazyComponent'; // Eager import

const Day4Before = () => {
    return (
        <div className="view-container">
            <h2>Day 4 (Before): Eager Loading</h2>
            <p className="mb-6">
                This component was imported normally at the top of the file.
                <br />
                It means its code was included in the main bundle (or the parent's chunk)
                and downloaded immediately when the app started, even if you didn't look at this tab yet.
            </p>

            <div className="min-h-[300px] relative">
                <RenderCounter name="Day 4 Parent" />

                <div className="mt-6">
                    <p className="mb-4 text-red-400 font-bold">Loaded immediately:</p>
                    <HeavyLazyComponent />
                </div>
            </div>
        </div>
    );
};

export default Day4Before;
