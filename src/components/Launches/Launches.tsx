import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from '../../common/Container';
import axios from 'axios';
import LaunchCard from './LaunchCard/LaunchCard';
import Input from '../../common/Input';
import { Launch, SelectOption } from '../../types';
import Dropdown from '../../common/Dropdown';
import LaunchPopup from './LaunchPopup/LaunchPopup';
import Spinner from '../../common/spinner';
import { queryCreator } from '../../helpers';
import Button from '../../common/Button';

const LaunchesStyled = styled.div`
  padding-top: 100px;
`;

const FiltersBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: stretch;
`;

const LaunchesGrid = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const NoLaunches = styled.div`
  margin-top: 25px;
  text-align: center;
`

const options: SelectOption[] = [
  {
    text: 'All',
    value: 'all'
  },
  {
    text: 'Success',
    value: 'succcess'
  },
  {
    text: 'Failed',
    value: 'failed'
  }
]

const Launches = () => {
  const [launches, setLaunches] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true)
  const [totalDocs, setTotalDocs] = useState(0);

  const [showPopup, setShowPopup] = useState(false);
  const [launch, setLaunch] = useState<Launch>();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dateFrom, setDateFrom] = useState<string>(new Date('2000-01-01').toISOString());
  const [dateTo, setDateTo] = useState<string>(new Date().toISOString());
  const [selected, setSelected] = useState(options[0].value);

  useEffect(() => {
    if (isLoading) {
      axios.post('https://api.spacexdata.com/v5/launches/query', {
        query: queryCreator(dateFrom, dateTo, selected),
        options: {
          page: currentPage,
          limit: 10,
          sort: {
            date_utc: "desc"
          }
        }
      })
        .then((response) => {
          console.log(response);
          const newList = [...launches, ...response.data.docs];
          setLaunches(newList);
          setCurrentPage(prev => prev + 1)
          setTotalDocs(response.data.totalDocs);
        })
        .finally(() => {
          setIsLoading(false);
        })
    }
  }, [isLoading])



  useEffect(() => {
    const scrollHandler = () => {
      if (document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 100
        && launches.length < totalDocs) {
        setIsLoading(true);
      }
    }
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  }, [launches]);


  const inputChangeHandler = (inputData: string) => setSearchQuery(inputData);
  const dropdownSelectHandler = (value: string) => setSelected(value);
  const closePopup = () => setShowPopup(false);
  const dateFromHandler = (date: string) => setDateFrom(new Date(date).toISOString());
  const dateToHandler = (date: string) => setDateTo(new Date(date).toISOString());
  const filtershandler = () => {
    setLaunches([]);
    setIsLoading(true);
  };

  const currentLaunchClick = (launch: any) => {
    setShowPopup(true)
    const res = {
      details: launch.details,
      wikipedia: launch.links.wikipedia,
      launchDate: launch.date_utc,
      patchImg: launch.links.patch.small,
      name: launch.name,
      rocket: launch.rocket,
      image: launch.links.flickr.original.length ? launch.links.flickr.original[0] : '',
      youtubeId: launch.links.youtube_id
    }
    setLaunch(res);
  }

  return (
    <Container>
      <LaunchesStyled>
        <FiltersBar>
          <Input type="text" id="searchByRocket" placeholder="Rocket Name" onChange={inputChangeHandler} />
          <Input type="date" id="dateFrom" label="From" value={dateFrom.split('T')[0]} onChange={dateFromHandler} />
          <Input type="date" id="dateTo" label="To" value={dateTo.split('T')[0]} onChange={dateToHandler} />
          <Dropdown options={options} selectedValue={selected} onChange={dropdownSelectHandler} />
          <div>
            <Button innerText="Search" onClick={filtershandler} />
          </div>
        </FiltersBar>
        {!launches.length && !isLoading && <NoLaunches>No launches...</NoLaunches>}
        <LaunchesGrid>
          {
            launches.map((launch: any, idx: number) => (
              <LaunchCard
                onClick={() => currentLaunchClick(launch)}
                key={idx}
                details={launch.details}
                wikipedia={launch.links.wikipedia}
                launchDate={launch.date_utc}
                patchImg={launch.links.patch.small}
                name={launch.name}
                rocket={launch.rocket}
                image={launch.links.flickr.original.length ? launch.links.flickr.original[0] : ''}
                youtubeId={launch.links.youtube_id}
              />
            ))
          }
        </LaunchesGrid>
        {isLoading && <Spinner />}

        {
          showPopup && launch && <LaunchPopup
            details={launch.details}
            wikipedia={launch.wikipedia}
            launchDate={launch.launchDate}
            patchImg={launch.patchImg}
            name={launch.name}
            rocket={launch.rocket}
            image={launch.image}
            youtubeId={launch.youtubeId}
            closePopup={closePopup}
          />
        }
      </LaunchesStyled>
    </Container>
  )
}

export default Launches;
