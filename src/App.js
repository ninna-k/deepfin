import React, { useState, useEffect } from 'react';
import './App.css';
import Header from '../src/components/Header';
import InvoiceCard from '../src/components/InvoiceCard';
import InputTagCollection from '../src/components/InputTagCollection';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1aa993',
    },
  },
});


function App() {

  const [ mockData, setMockData ] = useState([
    {
      id : 'Invoice SF-1',
      title: 'UAB "Inovatyvius sprendimu centras LT"',
      type: 'Translation services',
      amount: '1000,99',
      status: 'overdue',
      category: 'invoice',
    },
    {
      id : 'Invoice SF-2',
      title: 'Expense test',
      description: 'Translation services',
      amount: '500,99',
      status: 'overdue',
      category: 'expense',
    }
  ]); 

  const [ filters, setFilters ] = useState({
    // tags that render are inside of 'passingTags' object.
    passingTags: {
      category: {
        expense: false,
        invoice: false,
        withdrawal: false
      },
      status: {
        draft: false,
        overdue: false,
        unpaid: false
      }
    }
  })

  useEffect(() => {
    const filteredItems = multiPropsFilter(
      mockData,
      filteredCollected()
    );

    setMockData(filteredItems);
  }, [filters]);

  // **************** UNIVERSAL Filter ****************
  const allFilterClickListener = (e, filterProp, name) => {
    setFilters({
      passingTags: {
        ...filters.passingTags,
        [filterProp]: {
          ...filters.passingTags[filterProp],
          [name]: !filters.passingTags[filterProp][name]
        }
      }
    });

    
  };

  // **************** Collect all keys and Filter ****************
  // This function collects ALL keys that have true as a value, then create a new obj to compare to filter.
    const filteredCollected = () => {
      const collectedTrueKeys = {
        category: [],
        status: [],
      };
      const { category, status } = filters.passingTags;
      // console.log(filters.passingTags)
      for (let categoryKey in category) {
        if (category[categoryKey]) collectedTrueKeys.category.push(categoryKey);
      }
      for (let statusKey in status) {
        if (status[statusKey]) collectedTrueKeys.status.push(statusKey);
      }
      // console.log(collectedTrueKeys)
      return collectedTrueKeys;
    };

    const multiPropsFilter = (items, filters) => {
      const filterKeys = Object.keys(filters);
      return items.filter(product => {
        return filterKeys.every(key => {
          if (!filters[key].length) return true;
          // Loops again if product[key] is an array
          if (Array.isArray(product[key])) {
            return product[key].some(keyEle => filters[key].includes(keyEle));
          }
          return filters[key].includes(product[key]);
        });
      });
    };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />

        <div className="filter-container">
          <InputTagCollection allFilterClickListener={allFilterClickListener} filters={filters} />
        </div>

        <div className="invoice-container">
          <InvoiceCard data={mockData} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
