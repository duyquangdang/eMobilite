-- phpMyAdmin SQL Dump
-- version 4.0.10.6
-- http://www.phpmyadmin.net
--
-- Host: mysql1.alwaysdata.com
-- Generation Time: Mar 22, 2016 at 02:58 PM
-- Server version: 5.1.66-0+squeeze1
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `doukceri_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `ingredients`
--

CREATE TABLE IF NOT EXISTS `ingredients` (
  `ING_ID` int(11) NOT NULL AUTO_INCREMENT,
  `ING_NOM` varchar(100) NOT NULL,
  `ING_PRIX` float NOT NULL,
  `ING_CATEGORIE` varchar(100) NOT NULL,
  PRIMARY KEY (`ING_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=30 ;

--
-- Dumping data for table `ingredients`
--

INSERT INTO `ingredients` (`ING_ID`, `ING_NOM`, `ING_PRIX`, `ING_CATEGORIE`) VALUES
(1, 'Mozzarela', 1.5, 'FROMAGE'),
(2, 'Oignon', 1.1, 'AUTRES'),
(3, 'Tomates fraîches', 1.2, 'AUTRES'),
(4, 'Sauce au poivre', 1.6, 'SAUCE'),
(5, 'Boulettes de boeuf épicé', 2, 'VIANDE'),
(6, 'Champignons', 1.2, 'AUTRES'),
(7, 'Poulet rôti', 2.2, 'VIANDE'),
(8, 'Sauce à la moutarde à l''ancienne', 1.3, 'SAUCE'),
(9, 'Bacon', 1.8, 'VIANDE'),
(10, 'Potatoes', 1.1, 'AUTRES'),
(11, 'Raclette', 1.4, 'FROMAGE'),
(12, 'Lardons fumés', 1.7, 'VIANDE'),
(13, 'Pommes de terre', 1.2, 'AUTRES'),
(14, 'Reblochon', 1.7, 'FROMAGE'),
(15, 'Chèvre', 1.4, 'FROMAGE'),
(16, 'Miel', 1, 'SAUCE'),
(17, 'Poivrons mélangés', 1, 'AUTRES'),
(18, 'Sauce curry', 1.2, 'SAUCE'),
(19, 'Jambon', 1.5, 'VIANDE'),
(20, 'Origan', 1.1, 'AUTRES'),
(21, 'Sauce barbecue', 1.2, 'SAUCE'),
(22, 'Merguez', 2.1, 'VIANDE'),
(23, 'Saucisson pepperoni', 2.4, 'VIANDE'),
(24, 'Emmental', 1.5, 'FROMAGE'),
(25, 'Saumon fumé', 3, 'VIANDE'),
(26, 'Aneth', 0.7, 'AUTRES'),
(27, 'Fourme d''Ambert', 1.4, 'FROMAGE'),
(28, 'Olives noires', 1.7, 'AUTRES'),
(29, 'Ananas', 1.9, 'AUTRES');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;