import useSWR from "swr";
import PetsApi from "../api/PetsApi";
import { apiURL } from "../api/index";
import toast from "react-hot-toast";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Card from "../components/Card";

const Adoptions = () => {
  const [page, setPage] = useState(1);
  const {
    data: pets,
    error,
    isLoading,
  } = useSWR(apiURL, PetsApi.getPets, {
    revalidateOnFocus: false,
    errorRetryCount: 2,
  });

  function showToast() {
    toast.error("Error showing data.", {
      id: "errorData",
    });
  }

  return (
    <div className="flex flex-col w-full mt-5 mb-10 p-5 gap-y-10">
      <section className="flex flex-col justify-center w-[80%] mx-auto p-5 gap-y-5">
        <h1 className="text-2xl md:text-3xl font-medium text-center text-green-600/100">
          Adoptions
        </h1>
        <p className="text-sm md:text-base text-pretty">
          In most cases, adopting means giving a second opportunity to an animal
          that has suffered a process of abandonment, and in occasions abuse.
          Welcome him into your home for life and give him the stability, care
          and affection that he needs will help him Regain your confidence and
          self-esteem.
        </p>
      </section>
      <section className="flex flex-col md:flex-row justify-center flex-wrap w-[80%] mx-auto p-5 gap-y-16">
        {error ? (
          <>
            <div className="flex justify-center items-center w-full text-center">
              <h1 className="text-xl md:text-2xl font-bold">
                There are no pets available for adoption.
              </h1>
            </div>
            {showToast()}
          </>
        ) : (
          <>
            {isLoading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            ) : (
              <>
                {pets.Pets.length > 0 ? (
                  <>
                    {pets.Pets.slice(page * 8 - 8, page * 8).length > 0 ? (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center w-full">
                          <AnimatePresence>
                            {pets.Pets.map((pet) => (
                              <Card
                                key={pet.petId}
                                petId={pet.petId}
                                petImage={pet.petImage}
                                petName={pet.petName}
                                petHistory={pet.petHistory}
                                petAge={pet.petAge}
                                petSize={pet.petSize}
                                adoptionStatus={pet.adoptionStatus}
                                sponsorshipStatus={pet.sponsorshipStatus}
                              />
                            ))}
                          </AnimatePresence>
                        </div>
                        <div className="flex justify-center items-center px-8 py-2 text-base md:text-lg bg-green-500 text-white rounded-full shadow-lg">
                          <div className="join" data-theme="corporate">
                            <button
                              className="join-item btn mr-2 text-base md:text-xl"
                              onClick={() => {
                                page > 1 && setPage(page - 1);
                              }}
                            >
                              «
                            </button>
                            <button className="join-item btn">
                              Page {page}
                            </button>
                            <button
                              className="join-item btn ml-2 text-base md:text-xl"
                              onClick={() => {
                                pets.Pets.slice(page * 8 - 8, page * 8).length >
                                  0 && setPage(page + 1);
                              }}
                            >
                              »
                            </button>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex justify-center items-center w-full text-center">
                          <h1 className="text-xl md:text-2xl font-bold">
                            There are no more pets available for adoption.
                          </h1>
                        </div>
                        <div className="flex justify-center items-center px-8 py-2 text-base md:text-lg bg-green-500 text-white rounded-full shadow-lg">
                          <div className="join" data-theme="corporate">
                            <button
                              className="join-item btn mr-2 text-base md:text-xl"
                              onClick={() => {
                                page > 1 && setPage(page - 1);
                              }}
                            >
                              «
                            </button>
                            <button className="join-item btn">
                              Page {page}
                            </button>
                            <button
                              className="join-item btn ml-2 text-base md:text-xl"
                              onClick={() => {
                                pets.Pets.slice(page * 8 - 8, page * 8).length >
                                  0 && setPage(page + 1);
                              }}
                            >
                              »
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <div className="flex flex-col justify-center items-center w-full text-center">
                      <h1 className="text-xl md:text-2xl font-bold">
                        There are no pets available for adoption .
                      </h1>
                    </div>
                  </>
                )}
              </>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default Adoptions;
