import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
  FiltersBar,
  FiltersButton,
  LaunchesGrid,
  LaunchesStyled,
  NoLaunches,
  StickyContainer
} from './Launches.styledComponents';
import LaunchCard from './LaunchCard/LaunchCard';
import LaunchPopup from './LaunchPopup/LaunchPopup';
import SideMenu from './SideMenu/SideMenu';

import Container from '../../common/Container';
import Input from '../../common/Input';
import Dropdown from '../../common/Dropdown';
import Spinner from '../../common/spinner';
import Button from '../../common/Button';

import { getYoutubePreview, queryCreator } from '../../helpers';
import { Launch, Rocket, SelectOption } from '../../types';

const options: SelectOption[] = [
  {
    text: 'All',
    value: 'all'
  },
  {
    text: 'Success',
    value: 'success'
  },
  {
    text: 'Failed',
    value: 'failed'
  }
]

const Launches = () => {
  const [allLaunches, setAllLaunches] = useState<Launch[]>([]);
  const [launches, setLaunches] = useState<Launch[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true)
  const [totalDocs, setTotalDocs] = useState(0);

  const [rockets, setRockets] = useState<Rocket[]>([]);
  const [allRockets, setAllRockets] = useState<Rocket[]>([]);

  const [showPopup, setShowPopup] = useState(false);
  const [launch, setLaunch] = useState<Launch>();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dateFrom, setDateFrom] = useState<string>(new Date('2000-01-01').toISOString());
  const [dateTo, setDateTo] = useState<string>(new Date().toISOString());
  const [selected, setSelected] = useState(options[0].value);

  const [openSideMenu, setOpenSideMenu] = useState(false);

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
          let launchesList: Launch[] = [];
          response.data.docs.forEach((i: any) => {
            const onelaunch: Launch = {
              id: i.id,
              rocketId: i.rocket,
              details: i.details,
              wikipedia: i.links.wikipedia,
              launchDate: i.date_utc,
              patchImg: i.links.patch.small,
              name: i.name,
              image: i.links.flickr.original.length ? i.links.flickr.original[0] : getYoutubePreview(i.links.youtube_id),
              youtubeId: i.links.youtube_id
            }
            launchesList.push(onelaunch);
          })
          const newList = [...launches, ...launchesList];
          setLaunches(newList);
          setAllLaunches(newList);
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

  useEffect(() => {
    axios.get('https://api.spacexdata.com/v4/rockets')
      .then((response) => {
        let rockets: Rocket[] = [];
        response.data.forEach((i: any) => {
          const rocket = {
            name: i.name,
            id: i.id
          }
          rockets.push(rocket);
        })
        setRockets(rockets);
        setAllRockets(rockets);
      })
  }, []);


  const inputChangeHandler = (inputData: string) => {
    setSearchQuery(inputData);
    if (!inputData) {
      return setRockets(allRockets);
    }
    const filtered = allRockets.filter((rocket => rocket.name.toLowerCase().includes(inputData.toLowerCase().trim())));
    setRockets(filtered);
  };
  const dropdownSelectHandler = (value: string) => setSelected(value);
  const closePopup = () => setShowPopup(false);
  const dateFromHandler = (date: string) => setDateFrom(new Date(date).toISOString());
  const dateToHandler = (date: string) => setDateTo(new Date(date).toISOString());
  const filtershandler = () => {
    setLaunches([]);
    setCurrentPage(1);
    setIsLoading(true);
  };
  const openMenuHandler = (b: boolean) => setOpenSideMenu(b);

  useEffect(() => {
    const filterbyRocket = () => {
      let res: Launch[] = [];
      rockets.map((r) => {
        return allLaunches.filter((l) => l.rocketId === r.id)
      }).forEach((arr) => {
        res = [...res, ...arr];
      })
      return res;
    }
    const filtered = filterbyRocket();
    setLaunches(filtered);
    if (!searchQuery) {
      setLaunches(allLaunches);
    }
  }, [rockets])

  const currentLaunchClick = (launch: Launch) => {
    setShowPopup(true)
    setLaunch(launch);
  }

  return (
    <LaunchesStyled>
      <StickyContainer>
        <Container>
          <FiltersBar>
            <Input
              type="text"
              id="searchByRocket"
              placeholder="Rocket Name"
              onChange={inputChangeHandler}
            />
            <Input type="date" id="dateFrom" label="From" value={dateFrom.split('T')[0]} onChange={dateFromHandler} />
            <Input type="date" id="dateTo" label="To" value={dateTo.split('T')[0]} onChange={dateToHandler} />
            <Dropdown options={options} selectedValue={selected} onChange={dropdownSelectHandler} />
            <div>
              <Button innerText="Search" onClick={filtershandler} />
            </div>
          </FiltersBar>
          <FiltersButton>
            <Button innerText="Filters" onClick={() => openMenuHandler(true)} />
          </FiltersButton>
        </Container>
      </StickyContainer>
      {!launches.length && !isLoading && <NoLaunches>No launches...</NoLaunches>}
      <LaunchesGrid>
        {
          launches.map((launch: Launch) => (
            <LaunchCard
              onClick={() => currentLaunchClick(launch)}
              key={launch.id}
              name={launch.name}
              image={launch.image}
              youtubeId={launch.youtubeId}
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
          image={launch.image}
          youtubeId={launch.youtubeId}
          closePopup={closePopup}
          id={launch.id}
          rocketId={launch.rocketId}
          rocketName={allRockets.find((r) => r.id === launch.rocketId)?.name}
        />
      }
      {
        openSideMenu &&
        <SideMenu
          options={options}
          selected={selected}
          dropdownSelectHandler={dropdownSelectHandler}
          filtershandler={filtershandler}
          dateFrom={dateFrom}
          dateTo={dateTo}
          dateFromHandler={dateFromHandler}
          dateToHandler={dateToHandler}
          inputChangeHandler={inputChangeHandler}
          openMenu={openMenuHandler}
        />
      }
    </LaunchesStyled>
  )
}

export default Launches;
